
<template>
  <Icon :iconName="'castle'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CastleIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'castle'
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
