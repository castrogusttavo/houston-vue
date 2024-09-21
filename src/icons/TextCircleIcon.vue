
<template>
  <Icon :iconName="'text-circle'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TextCircleIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'text-circle'
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
