
<template>
  <Icon :iconName="'dua'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'DuaIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'dua'
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
