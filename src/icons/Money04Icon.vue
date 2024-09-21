
<template>
  <Icon :iconName="'money-04'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Money04Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'money-04'
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
