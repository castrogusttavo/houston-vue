
<template>
  <Icon :iconName="'film-roll-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FilmRoll01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'film-roll-01'
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
