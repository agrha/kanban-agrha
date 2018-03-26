<template>
  <div class='ui basic content center aligned segment'>
    <button class='ui basic button icon' v-on:click="openForm" v-show="!isCreating">
      <i class="glyphicon glyphicon-plus"> Create New Kanban</i>
    </button>
    <div class='ui centered card' v-show="isCreating">
      <div class='content'>
        <div class='ui form'>
          <div class='field'>
            <label>Title</label>
            <input v-model="kanbanTitle" type='text'>
          </div>
          <div class='textform'>
            <label>Content</label>
            <input v-model="kanbanContent" type='text'>
          </div>
          <div class='field'>
            <label>Point</label>
            <input v-model="kanbanPoint" type='text'>
          </div>
          <div class='ui two button attached buttons'>
            <button class='ui basic blue button' v-on:click="sendForm()">
              Create
            </button>
            <button class='ui basic red button' v-on:click="closeForm">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      kanbanTitle: '',
      kanbanContent: '',
      kanbanPoint: '',
      isCreating: false
    }
  },
  methods: {
    ...mapActions([
      'addTask'
    ]),
    openForm () {
      this.isCreating = true
    },
    closeForm () {
      this.isCreating = false
    },
    sendForm () {
      if (this.kanbanTitle.length > 0 && this.kanbanContent.length > 0) {
        let obj = {
          title: this.kanbanTitle,
          content: this.kanbanContent,
          point: this.kanbanPoint,
          status: 'BackLog'
        }
        this.addTask(obj)
        this.closeForm()
      }
    }
  }
}
</script>
