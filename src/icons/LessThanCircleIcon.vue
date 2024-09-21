
<template>
  <Icon :iconName="'less-than-circle'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'LessThanCircleIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'less-than-circle'
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
