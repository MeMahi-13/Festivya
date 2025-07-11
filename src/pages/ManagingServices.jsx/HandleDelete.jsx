import Swal from 'sweetalert2';

export const handleDelete = async (id, refetch) => {
  try {
    // Display confirmation dialog
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!',
    });

    // Proceed if confirmed
    if (result.isConfirmed) {
      // Perform the deletion
      const response = await fetch(`http://localhost:3000/services/${id}`, {
        method: 'DELETE',
      });

      // Check if the response is successful
      if (response.ok) {
        // Display success message
        await Swal.fire('Deleted!', 'Your service has been deleted.', 'success');
        
        // Re-fetch data after deletion
        if (refetch) refetch();
      } else {
        // Handle server errors
        const errorData = await response.json();
        await Swal.fire('Error', errorData.message || 'Something went wrong.', 'error');
      }
    }
  } catch (error) {
    // Handle unexpected errors
    console.error('Error during deletion:', error);
    await Swal.fire('Error', 'An unexpected error occurred.', 'error');
  }
};
