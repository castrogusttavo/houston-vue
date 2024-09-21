
<template>
  <Icon :iconName="'circle'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CircleIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'circle'
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
