
<template>
  <Icon :iconName="'bacteria'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BacteriaIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'bacteria'
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
