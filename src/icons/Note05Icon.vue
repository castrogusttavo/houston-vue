
<template>
  <Icon :iconName="'note-05'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Note05Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'note-05'
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
