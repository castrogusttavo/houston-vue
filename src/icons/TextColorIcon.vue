
<template>
  <Icon :iconName="'text-color'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TextColorIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'text-color'
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
