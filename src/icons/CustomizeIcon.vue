
<template>
  <Icon :iconName="'customize'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CustomizeIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'customize'
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
