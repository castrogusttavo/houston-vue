
<template>
  <Icon :iconName="'airplay-line'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AirplayLineIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'airplay-line'
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
