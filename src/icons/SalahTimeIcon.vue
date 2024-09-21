
<template>
  <Icon :iconName="'salah-time'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SalahTimeIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'salah-time'
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
