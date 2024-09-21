
<template>
  <Icon :iconName="'alien-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Alien01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'alien-01'
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
