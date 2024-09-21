
<template>
  <Icon :iconName="'reflex'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ReflexIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'reflex'
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
