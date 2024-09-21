
<template>
  <Icon :iconName="'note'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'NoteIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'note'
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
