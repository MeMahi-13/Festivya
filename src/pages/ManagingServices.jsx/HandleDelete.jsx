import Swal from 'sweetalert2';

export const handleDelete = (id, refetch) => {
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#d33',
    cancelButtonColor: '#3085d6',
    confirmButtonText: 'Yes, delete it!'
  }).then(async (result) => {
    if (result.isConfirmed) {
      try {
        const response = await fetch(`http://localhost:3000/services/${id}`, {
          method: 'DELETE',
        });

        if (!response.ok) {
          // If the response status is not OK, throw an error
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Check if the response body is empty
        const text = await response.text();
        const data = text ? JSON.parse(text) : { deletedCount: 0 };

        if (data.deletedCount > 0) {
          Swal.fire(
            'Deleted!',
            'Your service has been deleted.',
            'success'
          );
          if (refetch) refetch(); // optional re-fetch
        } else {
          Swal.fire('Error', 'Service could not be deleted.', 'error');
        }
      } catch (error) {
        console.error('Error during deletion:', error);
        Swal.fire('Error', 'Something went wrong.', 'error');
      }
    }
  });
};
