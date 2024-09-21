
<template>
  <Icon :iconName="'presentation-07'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Presentation07Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'presentation-07'
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
