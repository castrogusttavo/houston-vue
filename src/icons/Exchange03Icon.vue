
<template>
  <Icon :iconName="'exchange-03'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Exchange03Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'exchange-03'
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
