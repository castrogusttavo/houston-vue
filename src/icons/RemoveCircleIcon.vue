
<template>
  <Icon :iconName="'remove-circle'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'RemoveCircleIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'remove-circle'
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
