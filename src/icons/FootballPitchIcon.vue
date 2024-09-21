
<template>
  <Icon :iconName="'football-pitch'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FootballPitchIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'football-pitch'
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
