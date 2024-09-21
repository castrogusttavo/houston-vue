
<template>
  <Icon :iconName="'pound-circle'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PoundCircleIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'pound-circle'
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
