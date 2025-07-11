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
  }).then((result) => {
    if (result.isConfirmed) {
      fetch(`/services/${id}`, {
        method: 'DELETE',
      })
        .then(res => res.json())
        .then(data => {
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
        })
        .catch(() => {
          Swal.fire('Error', 'Something went wrong.', 'error');
        });
    }
  });
};
