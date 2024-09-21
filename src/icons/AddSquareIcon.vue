
<template>
  <Icon :iconName="'add-square'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AddSquareIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'add-square'
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
