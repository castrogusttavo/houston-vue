
<template>
  <Icon :iconName="'note-edit'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'NoteEditIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'note-edit'
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
