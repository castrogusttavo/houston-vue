
<template>
  <Icon :iconName="'root-circle'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'RootCircleIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'root-circle'
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
