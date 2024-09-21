
<template>
  <Icon :iconName="'moonset'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MoonsetIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'moonset'
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
