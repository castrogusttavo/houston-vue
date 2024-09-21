
<template>
  <Icon :iconName="'internet'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'InternetIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'internet'
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
