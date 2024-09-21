
<template>
  <Icon :iconName="'money-03'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Money03Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'money-03'
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
