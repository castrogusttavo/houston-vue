
<template>
  <Icon :iconName="'camel'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CamelIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'camel'
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
