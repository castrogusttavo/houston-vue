
<template>
  <Icon :iconName="'home-09'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Home09Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'home-09'
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
