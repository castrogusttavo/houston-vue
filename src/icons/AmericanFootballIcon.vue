
<template>
  <Icon :iconName="'american-football'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AmericanFootballIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'american-football'
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
