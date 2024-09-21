
<template>
  <Icon :iconName="'baseball'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BaseballIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'baseball'
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
