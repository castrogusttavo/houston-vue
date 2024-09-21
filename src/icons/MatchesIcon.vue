
<template>
  <Icon :iconName="'matches'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MatchesIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'matches'
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
