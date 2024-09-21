
<template>
  <Icon :iconName="'neutral'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'NeutralIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'neutral'
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
