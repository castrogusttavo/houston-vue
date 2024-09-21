
<template>
  <Icon :iconName="'senseless'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SenselessIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'senseless'
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
