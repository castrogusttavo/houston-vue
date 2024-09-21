
<template>
  <Icon :iconName="'beater'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BeaterIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'beater'
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
