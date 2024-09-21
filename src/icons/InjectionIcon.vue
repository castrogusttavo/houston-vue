
<template>
  <Icon :iconName="'injection'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'InjectionIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'injection'
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
