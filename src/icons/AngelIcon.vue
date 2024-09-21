
<template>
  <Icon :iconName="'angel'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AngelIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'angel'
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
