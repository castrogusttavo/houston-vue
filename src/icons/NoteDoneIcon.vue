
<template>
  <Icon :iconName="'note-done'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'NoteDoneIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'note-done'
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
