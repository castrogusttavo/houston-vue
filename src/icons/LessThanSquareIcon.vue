
<template>
  <Icon :iconName="'less-than-square'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'LessThanSquareIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'less-than-square'
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
