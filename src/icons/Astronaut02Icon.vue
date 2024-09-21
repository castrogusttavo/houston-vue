
<template>
  <Icon :iconName="'astronaut-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Astronaut02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'astronaut-02'
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
