
<template>
  <Icon :iconName="'nerd'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'NerdIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'nerd'
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
