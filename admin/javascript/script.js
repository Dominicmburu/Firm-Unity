function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content');
    sidebar.classList.toggle('sidebar-visible');
    mainContent.classList.toggle('main-content-expanded');
}
function toggleAddAdminForm() {
    const form = document.getElementById('add-admin-form');
    form.classList.toggle('hidden');
}