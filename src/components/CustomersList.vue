<template>
  <div class="list-container">
    <h2 class="h4 mb-3">Clientes</h2>
    <router-link class="btn btn-sm btn-primary mb-3" to="/customers/new">+ Nuevo cliente</router-link>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Email</th>
          <th class="text-end">Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="c in items" :key="c.id">
          <td>{{ c.fullName }}</td>
          <td>{{ c.email }}</td>
          <td class="text-end">
            <router-link class="btn btn-sm btn-link" :to="`/customers/${c.id}/edit`">Editar</router-link>
            <button class="btn btn-sm btn-link text-danger" @click="del(c.id)">Eliminar</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import svc from '@/services/CustomersService'
export default {
  name: 'CustomersList',
  data: () => ({ items: [] }),
  mounted() { this.fetch() },
  methods: {
    fetch() {
      svc.list().then(r => this.items = r.data)
    },
    del(id) {
      if (!confirm('¿Eliminar cliente?')) return
      svc.remove(id).then(this.fetch)
    }
  }
}
</script>


<style scoped>
.list-container {
  background: #4b4b4b;
  color: #f8f9fa;
  border-radius: 18px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.18);
  padding: 2em;
  margin: 2em 0;
}

.list-container h2 {
  color: #f8f9fa;
  letter-spacing: 1px;
}

.list-container .btn-primary {
  background: linear-gradient(90deg, #232526 0%, #414345 100%);
  border: none;
  border-radius: 14px;
  color: #fff;
  box-shadow: 0 2px 8px rgba(0,0,0,0.18);
  transition: background 0.2s, color 0.2s;
}

.list-container .btn-primary:hover {
  background: #495057;
  color: #fff;
}

.list-container .table {
  background: transparent;
  color: #f8f9fa;
  border-radius: 12px;
  overflow: hidden;
}

.list-container .table-striped > tbody > tr:nth-of-type(odd) {
  background-color: #3a3a3a;
}

.list-container .btn-link {
  color: #adb5bd;
  border-radius: 10px;
  transition: background 0.2s, color 0.2s;
}

.list-container .btn-link:hover {
  background: #232526;
  color: #fff;
}
</style>

