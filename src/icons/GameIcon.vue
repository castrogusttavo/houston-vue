
<template>
  <Icon :iconName="'game'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'GameIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'game'
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
