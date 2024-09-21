
<template>
  <Icon :iconName="'next'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'NextIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'next'
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
