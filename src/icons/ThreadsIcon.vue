
<template>
  <Icon :iconName="'threads'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ThreadsIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'threads'
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
