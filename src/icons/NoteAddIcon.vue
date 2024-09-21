
<template>
  <Icon :iconName="'note-add'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'NoteAddIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'note-add'
    },
    ...Icon.props
  },
  computed: {
    props() {
      return { ...this.$props };
    }
  }
};
</script>
