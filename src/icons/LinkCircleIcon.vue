
<template>
  <Icon :iconName="'link-circle'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'LinkCircleIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'link-circle'
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
