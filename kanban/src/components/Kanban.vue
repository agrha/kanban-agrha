<template>
  <div>
    <add-kanban></add-kanban>
      <br>
      <b-card-group deck>
          <b-card title="BackLog">
            <div v-for="task in tasks" :key="task['.key']">
              <b-card bg-variant="dark" text-variant="white" v-if= "task.status === 'BackLog'">
                  <div :title="task.title">
                  <p>{{task.title}}</p>
                  <p class="card-text">
                  content : {{task.content}} <br>
                  point : {{task.point}}
                  </p>
                  <b-button variant="danger" @click="deleteTask(task['.key'])">x</b-button>
                  <b-button variant="primary"  @click="moveTodo(task)">
                    >>
                  </b-button>
                </div>
              </b-card>
            </div>
          </b-card>
          <b-card title="Todo">
            <div v-for="task in tasks" :key="task['.key']">
              <b-card bg-variant="dark" text-variant="white" v-if= "task.status === 'Todo'">
                  <div :title="task.title">
                  <p>{{task.title}}</p>
                  <p class="card-text">
                  content : {{task.content}} <br>
                  point : {{task.point}}
                  </p>
                  <b-button variant="primary" @click="moveBackLog(task)">
                    Back
                  </b-button>
                  <b-button variant="danger" @click="deleteTask(task['.key'])">x</b-button>
                  <b-button variant="primary" @click="moveDoing(task)">
                    >>
                  </b-button>
                </div>
              </b-card>
            </div>
          </b-card>
          <b-card title="Doing">
            <div v-for="task in tasks" :key="task['.key']">
              <b-card bg-variant="dark" text-variant="white" v-if= "task.status === 'Doing'">
                  <div :title="task.title">
                  <p>{{task.title}}</p>
                  <p class="card-text">
                  content : {{task.content}} <br>
                  point : {{task.point}}
                  </p>
                  <b-button variant="primary" @click="moveTodo(task)">
                    Back
                  </b-button>
                  <b-button variant="danger" @click="deleteTask(task['.key'])">x</b-button>
                  <b-button variant="primary" @click="moveDone(task)">
                    >>
                  </b-button>
                </div>
              </b-card>
            </div>
          </b-card>
          <b-card title="Done">
            <div v-for="task in tasks" :key="task['.key']">
              <b-card bg-variant="dark" text-variant="white" v-if= "task.status === 'Done'">
                  <div :title="task.title">
                  <p>{{task.title}}</p>
                  <p class="card-text">
                  content : {{task.content}} <br>
                  point : {{task.point}}
                  </p>
                  <b-button variant="primary" @click="moveDoing(task)">
                    Back
                  </b-button>
                  <b-button variant="danger" @click="deleteTask(task['.key'])">x</b-button>
                </div>
              </b-card>
            </div>
          </b-card>
      </b-card-group>
  </div>
</template>

<script>
import AddKanban from '@/components/AddKanban'
import { mapGetters, mapActions } from 'vuex'
import { tasksRef } from '../firebase'
export default {
  components: {
    AddKanban
  },
  firebase: {
    tasks: tasksRef
  },
  methods: {
    ...mapActions([
      'fetchData',
      'update',
      'delete'
    ]),
    moveBackLog (task) {
      let key = task['.key']
      let obj = {
        title: task.title,
        content: task.content,
        point: task.point,
        status: 'BackLog'
      }
      // console.log(tasksRef.child(key))
      tasksRef.child(key).set(obj)
      this.update(obj)
    },
    moveTodo (task) {
      let key = task['.key']
      let obj = {
        title: task.title,
        content: task.content,
        point: task.point,
        status: 'Todo'
      }
      // console.log(tasksRef.child(key))
      tasksRef.child(key).set(obj)
      this.update(obj)
    },
    moveDoing (task) {
      let key = task['.key']
      let obj = {
        title: task.title,
        content: task.content,
        point: task.point,
        status: 'Doing'
      }
      // console.log(tasksRef.child(key))
      tasksRef.child(key).set(obj)
      this.update(obj)
    },
    moveDone (task) {
      let key = task['.key']
      let obj = {
        title: task.title,
        content: task.content,
        point: task.point,
        status: 'Done'
      }
      // console.log(tasksRef.child(key))
      tasksRef.child(key).set(obj)
      this.update(obj)
    },
    deleteTask (key) {
      tasksRef.child(key).remove()
      this.$store.dispatch('deleteTask', key)
    },
    change (task) {
      console.log(task)
    }
  },
  computed: {
    ...mapGetters([
    ])
  },
  created () {
    this.fetchData()
  }
}
</script>

<style scoped>
button {
  color: black;
}
</style>
