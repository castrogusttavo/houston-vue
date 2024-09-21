
<template>
  <Icon :iconName="'oven'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'OvenIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'oven'
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
