
<template>
  <Icon :iconName="'flushed'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FlushedIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'flushed'
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
